<p align="center">
    <img src="../PPorg/Images/logo.png" width="40%">
</p>

# Requirements

## Image upload
- The user is able to upload an image of a plant with a potential disease by tapping/clicking on the “upload” button
    - Image upload requirements:
        - The file type should be either a (.png) or (.jpg)
        - The file size should be no less than 1440x1080 pixels, 3.1 MP and no more than 4032x3024 pixels, 10 MP

## Uploaded image data
- When file size and type requirements are satisfied, the user uploaded image should be stored in the database.

## Processing
- After the user uploaded image is stored in the database,  an API Request POST should be made with the user uploaded image address found in the database.
- Keras API should load pre-existing trained CNN model and apply builtin functions to classify the user-uploaded image.

## Results
- Plant disease analysis results should returned as a JSON object via HTTP Response and injected as a string in the “results” component and displayed to the user.
- A __disclaimer__ should be displayed at the top of the “results” section at all times:
    - “Disclaimer: Results are based on data-driven predictions. This product does not intend to substitute as professional help nor does it reflect the range of diseases possible for a plant. Thank you”
- __Error Messages__
    - Warn the user with a pop-up message. The pop-up message should pop up in the middle of the screen, disabling and dimming everything behind it. Pop-up messages should only appear when the user-provided image cannot be processed. Possible errors would be when…
        - The file type is below or beyond the recommended file type. A pop-up should display this message: 
            - “Invalid file type. Please upload either a .JPG or .PNG image”
        - The file size is below or beyond the recommended file size. A pop-up should display this message: 
            - “Invalid file size. Please upload an image with a file that is no less than 1440x1080 pixels, 3.1 MP and no more than 4032x3024 pixels, 10 MP”
- __Once the user has uploaded the image__
    - __The image will then be displayed to the user within the “results” component__
        - Mobile view: The image should be a reduced size of 720x540 pixels and fitted and centered based on the width of the mobile device the user is using. 
        - Desktop view: The image should be a reduced size of 720x540 pixels and centered on the screen 
    - __Potential diseases will then be displayed within the “results” component__
        - Results should be in a listed text format and should display the name of the disease.
            - Example: “Your plant seems to have _disease name_”
        -  If the image of the plant is detected to be healthy, then inform the user through text
            - “Your plant seems to be healthy! No disease has been detected at the moment”
        - If no results are shown then an error message should display this message
            - “Sorry, we were unable to identify the plant or the disease at the moment. Please check out our tips for uploading clear images or visit us next time when our database has been updated”

