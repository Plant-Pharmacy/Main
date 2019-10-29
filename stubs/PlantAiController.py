# Pre-conditions: Retrieves image from the request.
# Post-conditions: Changes format for PlantAIModel and runs PlantAIModel on image for classification. Returns output as HTTP Response.

import modelfile 
import json 
from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view

def predict_disease(request):
  return HttpResponse(json(data))
