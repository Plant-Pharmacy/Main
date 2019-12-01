from django.urls import path
from . import views
from .views import *

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),
    path('plants/', views.PlantsView.as_view(), name='posts_list'),
]
# this needs to be removed for production stage
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
