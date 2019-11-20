from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('', include('plants.urls')),
    path('api/', include('plants.urls')),
]


