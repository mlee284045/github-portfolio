from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import requests

# Create your views here.
def index(request):
    return render(request, 'index.html')

@csrf_exempt
def proxy_to(request, path, target_url):
    url = '%s%s' % (target_url, path)
    headers = {
        'Authorization': 'Basic bWxlZTI4NDA0NTpKYXZhMTBTY3JpcHQxMw==',
        'User-Agent': 'mlee284045',
        'Content-Type': 'application/json'
    }
    if request.method == 'GET':
        proxied_response = requests.get(url, headers=headers)
    elif request.method == 'POST':
        proxied_response = requests.post(url, data=request.body, headers=headers)
    elif request.method == 'PUT':
        proxied_response = requests.put(url, data=request.body, headers=headers)
    elif request.method == 'DELETE':
        proxied_response = requests.delete(url, data=request.body, headers=headers)

    return HttpResponse(proxied_response)