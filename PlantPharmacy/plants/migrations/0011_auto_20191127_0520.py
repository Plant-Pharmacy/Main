# Generated by Django 2.2.7 on 2019-11-27 05:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0010_plants_classification'),
    ]

    operations = [
        migrations.AlterField(
            model_name='plants',
            name='classification',
            field=models.CharField(default='test', max_length=100),
        ),
    ]
