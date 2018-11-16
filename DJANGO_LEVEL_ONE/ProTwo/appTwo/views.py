from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse("My second project (HELLO WORLD from AppTwo!)")


def help(request):
    helpdict = {'help_insert': 'Help page!'}
    return render(request, 'appTwo/help.html', context=helpdict)
