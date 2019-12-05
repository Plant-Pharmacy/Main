<p align="center">
    <img src="../PPorg/Images/logo.png" width="40%">
</p>

# Requirements

## Image upload
- The user is able to upload an image of a plant with a potential disease by tapping/clicking on the “upload” button
    - ``{Revised: Combining two types of functionality (uploading and submitting) into one button is a lot more complicated than we thought and would require extra research. Implementing both functionalities within two buttons is a lot simpler. It also allows for more descriptive actions and reduce UX friction.}``
    - Image upload requirements:
        - The file type should be either a (.png) or (.jpg)
            - ``{Impossible: The form used to process uploaded images will only allow for .png or .jpg file types, therefore there will never be an instance when this error would occur. There is no need for this error popup.}``
        - ``{Complete}``The file size should be no less than 5 MP and no more than 10 MP

## Uploaded image data
- ``{Complete}``When file size and type requirements are satisfied, the user uploaded image should be stored in the database.

## Processing
- ``{Complete}``After the user uploaded image is stored in the database,  an API Request POST should be made with the user uploaded image address found in the database.
- ``{Complete}``Keras API should load pre-existing trained CNN model and apply builtin functions to classify the user-uploaded image.

## Results
- ``{Complete}`` Plant disease analysis results should returned as a JSON object via HTTP Response and injected as a string in the “results” component and displayed to the user.
- ``{Complete}`` A __disclaimer__ should be displayed at the bottom of the “resultscontainer" at all times:
    - Disclaimer: "Material on this page is for informational purposes only and should not be constructed as treatment advice."
- __Error Messages__
    - ``{Complete}``Warn the user with a pop-up message. The pop-up message should pop up in the middle of the screen, disabling and dimming everything behind it. Pop-up messages should only appear when the user-provided image cannot be processed. Possible errors would be when…
        - The file type is below or beyond the recommended file type. A pop-up should display this message: 
            - “Invalid file type. Please upload either a .JPG or .PNG image”
            - ``{Impossible: The form used to process uploaded images will only allow for .png or .jpg file types, therefore there will never be an instance when this error would occur. There is no need for this error popup.}``
        - ``{Complete}``The file size is below or beyond the recommended file size. A pop-up should display this message: 
            - "Please upload an image with a file size that is between 10KB and 5MB.4032x3024 pixels, 10 MP”
- __Once the user has uploaded the image__
    - __The image will then be displayed to the user within the “results” component__
        - ``{Complete}``Mobile view: The image should be fitted and centered based on the width of the mobile device the user is using. 
        - ``{Complete}``Desktop view: The image should be fitted and displayed on the left hand side. 
    - __Potential diseases will then be displayed within the “results” component__
        - ``{Complete}`` Results should be in a listed text format and should display the name of the disease.
            - Example: “Your _plant name_ seems to have _disease name_”
        -  ``{Complete}`` If the image of the plant is detected to be healthy, then inform the user through text
            - “Your plant seems to be healthy! No disease has been detected at the moment”
        - If no results are shown then an error message should display this message
            - “Sorry, we were unable to identify the plant or the disease at the moment. Please check out our tips for uploading clear images or visit us next time when our database has been updated”
            - ``{Impossible: Unfortunately, we have no control over what the model does and its functionality. It seems like the model will always respond as if the image uploaded is a plant when it clearly isn't, the model is not equipped to identify if the image is a plant or not.}``

