from rest_framework import serializers

class WelcomeSerializer(serializers.Serializer):
    message = serializers.CharField(max_length=200)