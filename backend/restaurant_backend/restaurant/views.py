from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import WelcomeSerializer
# Create your views here.

@api_view(['GET'])
def welcome_api(request):
    data = {"message": "HELLO TO OUR RESTAURANT API!"}
    serializer = WelcomeSerializer(data)
    return Response(serializer.data)