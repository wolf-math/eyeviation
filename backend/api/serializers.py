from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Weapon


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password:": {"write_only": True}}

    def create(self, valideted_data):
        user = User.objects.create_user(**valideted_data)
        return user
    

class WeaponSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weapon
        fields = ["id", "base", "sight", "laser", "grip", "barrel", "name", "status"]
        extra_kwargs = {"user": {"read_only": True}}