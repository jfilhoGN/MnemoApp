from django.db import models

from django.core import serializers

# Create your models here.
class Sociologia(models.Model):
	"""docstring for Sociologia"""
	url_capa = models.CharField(max_length=200, blank=False)
	titulo = models.CharField(max_length=20, blank=False)
	texto = models.CharField(max_length=1000, blank=True)
	url_figura1 = models.CharField(max_length=200, blank=True)
	url_figura2 = models.CharField(max_length=200, blank=False)
	def __str__(self):
		return self.titulo
