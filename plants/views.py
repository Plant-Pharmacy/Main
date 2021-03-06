from tensorflow.python.keras.models import load_model
from tensorflow.python.keras.backend import set_session
from keras.preprocessing import image
from django.shortcuts import render
from django.core import serializers
from .disease_classification import classification_list
import tensorflow as tf
import numpy as np
import os
from rest_framework import status
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.views import APIView
from .models import Plants
from .serializers import PlantSerializer
import logging
global graph, model

# Debugging
logger = logging.getLogger(__name__)

# Globals
sess = tf.InteractiveSession()
model = load_model('plants/AlexNetModel.hdf5')
graph = tf.get_default_graph()



class PlantsView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        plants = Plants.objects.all()
        serializer = PlantSerializer(plants, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
        plants_serializer = PlantSerializer(data=request.data)
        logger.warning(type(plants_serializer))
        data = request.FILES['plantImage']
        path = os.path.join(BASE_DIR,'media','images')
		
        clean_data = str(data).strip().replace(' ', '_')
        clean_data = clean_data.replace('(', '')
        clean_data = clean_data.replace(')', '')
 
        filename = os.path.join(path, clean_data)

        if plants_serializer.is_valid():
            ps = plants_serializer.save()
            identity = ps.id
            result = predict(filename)
            obj = Plants.objects.get(id=identity)
            obj.classification = result
            obj.save()
            response = PlantSerializer(instance=obj).data
            return Response(response, status=status.HTTP_201_CREATED)
        else:
            print('error', plants_serializer.errors)
            return Response(plants_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def predict(file):
    # Keras processing for model classification
    img = image.load_img(file, target_size=(224, 224))
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

    return classification
    # logger.warning(classification)


def home(request):
    if request.method == 'POST' and request.FILES[request]:
        post = request.method == 'POST'
        return render(request, "frontend/index.html", {
            'classification': classification
        })
    else:
        return render(request, "frontend/index.html")
