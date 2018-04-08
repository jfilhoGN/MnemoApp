from django.shortcuts import render

# Create your views here.
from django.utils import simplejson
from myapp.models import Historia

def response_mimetype(request):
if "application/json" in request.META['HTTP_ACCEPT']:
return "application/json"
else:
return "text/plain"

def HistoriasList(request):
historias = []
for obj in Historia.objects.all():
historias += [{
'url_capa': obj.url_capa,
'titulo': obj.titulo,
'texto': obj.texto,
'url_figura1': obj.url_figura1,
'url_fugura2': obj.url_figura2
}]
data = {"historias": historias}
response = JSONResponse(data, {}, response_mimetype(request))
response['Content-Disposition'] = 'inline; filename=files.json'
return response