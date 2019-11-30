from django.db import models


class Plants(models.Model):
    # name = models.CharField(max_length=100)
    plantImage = models.ImageField(
        upload_to='images/', default='images/default_img.jpg')
    classification = models.CharField(max_length=100, default='N/A')
