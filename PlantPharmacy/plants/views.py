import numpy as np
import tensorflow as tf
from .disease_classification import classification_list
from django.shortcuts import render
from keras.preprocessing import image
from tensorflow.python.keras.backend import set_session
from tensorflow.python.keras.models import load_model
global graph, model

sess = tf.InteractiveSession()
model = load_model('plants/AlexNetModel.hdf5')
graph = tf.get_default_graph()

def prediction(request):
    if request.method == 'POST' and request.FILES['myfile']:
        post = request.method == 'POST'
        filename = request.FILES['myfile']

        # Keras processing for model classification
        img = image.load_img(filename, target_size=(224, 224))
        img = image.img_to_array(img)
        img = np.expand_dims(img, axis=0)
        img = img/255
        with sess.as_default():
            with graph.as_default():
                preds = model.predict(img)

        # Flatten(): Flatten is used to reshape the tensor to such a shape 
        # which is equal to the number of elements present in the tensor. 
        preds = preds.flatten()

        # Maximum value infers the predicted class label.
        maximum_value = preds.max()
        for index, item in enumerate(preds):
            if item == maximum_value:
                classification = classification_list[index]

        # render(): Combines a given template with a given context dictionary and 
        # returns an HttpResponse object with that rendered text.
        return render(request, "plants/classification.html", {
            'classification': classification
            })
    else:
        return render(request, "plants/classification.html")
