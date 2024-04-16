from rest_framework import serializers
from login.models import CourseDiary

class LoginSerializer(serializers.Serializer):
    username=serializers.CharField()
    password=serializers.CharField()
    user_type=serializers.CharField()
    print('data serialized')

