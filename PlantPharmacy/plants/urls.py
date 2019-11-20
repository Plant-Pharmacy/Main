from django.urls import path
from . import views
from .views import *

urlpatterns = [
    path('', views.prediction, name='prediction'),
    path('plants/', views.PlantsView.as_view(), name='posts_list'),
]
