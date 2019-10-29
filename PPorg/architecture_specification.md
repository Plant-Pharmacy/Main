<p align="center">
    <img src="../PPorg/Images/logo.png" width="40%">
</p>

# PlantPharmacy Architecture Specification


## Infrastructure
- *Virtual Machine* - Unix-based, exact OS to be determined, Provider to be determined, but probably AWS (elastic beanstalk or just EC2), DigitalOcean, or Heroku
    - This component hosts the client-side code and the application server
    - This component does not reside on the client or server-side but hosts both
    - This component does communicate with the webserver and server-side components on a low-level (i.e. resource provision)
    - Note: cannot provide a stub for this
- *Web Server* - GUnicorn
    - The Web Server receives HTTP request and routes it and either serves frontend Views or routes API calls to PlantAIController (then, the controller handles the request)
    - Resides on server
    - Communicates with PlantAIController and serves all Views, but does not communicate with them directly
    - Note: Cannot provide a stub for this

## Views
React.js

All views are located under Main/PlantPharmacy/frontend/src/components/Layout/



- “HeaderView”
    - This component displays the PlantPharmacy branding
    - Resides in the client-side only
    - Does not communicate with other components
- “WelcomeView”
    - This component welcomes the user and provides brief instructions on how to use the PlantPharmacy web app.  
    - Resides on client-side only 
    - Communicates to the user our mission and use of the application - do not communicate to other components
- *UploadView*
    - This component prompts the user to upload a photograph, receives the photograph, and sends it to PhotoController
    - Resides on client-side only
    - Communicates with PhotoController, passing it photo file
- *ResultsView* 
    - This component displays results either as Disease Description or error to the user after a photo upload or upload and photo process by PlantAIModel
    - Resides on client-side only
    - Communicates with web-server, receiving text string to display
- *ImageView*
    - This component shows the image to the user after a successful upload
    - Resides on client-side only
    - Communicates with PhotoController to receive an image to display
- *AlertView*
    - Utilizes an existing react component and creates an alert template that is displayed to the user when specific error requirements are not satisfied.
    - It communicates alert messages that mainly generate from front-end but it also includes back-end alerts
- “FooterView”
    - This component shows the PlantPharmacy contact information
    - Resides in the client-side only
    - Does not communicate with other components 

## Model
Communicates in Django, but built with Keras, TensorFlow, etc.
- *PlantAIModel* (PlantAI for short) 
    - ML-based plant disease detection model receives image file (formatted correctly) from PlantAIController, runs algorithms, and returns a text string describing disease recognized in the image
    - Resides on server-side only
    - Communicates with PlantAIController to receive the correctly formatted image and to return the text string 
    - Note: we will not develop this component ourselves
    - Source: https://towardsdatascience.com/plant-ai-plant-disease-detection-using-convolutional-neural-network-9b58a96f2289

## Controller
Django, JavaScript
- *PhotoController*
    - This component receives a photo from UploadView, serializes it, and sends it as a request to Web Server
    - Resides on client-side only
    - Communicates with ImageView, UploadView, and Web Server, displaying the image on ImageView, receiving the image from UploadView, processing errors to make sure the image from UploadView is the correct dimension and file type for the PlantAI to run the algorithm efficiently, and then sending a serialized image to the web server via HTTP
- *PlantAIController* - the logic between the user and generating a response from the model
    - The PlantAIController retrieves image from the request, changes format for PlantAIModel and runs PlantAIModel on image for classification. It then returns output from PlantAIModel to Results View (via Web Server).
    - Resides on the server only
    - Communicates with WebServer to receive images and pass responses and with PlantAIModel to produce responses derived from the image


