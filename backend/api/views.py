from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer, WeaponSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny

from .models import Weapon

class WeaponListCreate(generics.ListCreateAPIView): 
    serializer_class = WeaponSerializer
    permission_classes = [IsAuthenticated]

    # handles GET requests
    def get_queryset(self):
        current_user = self.request.user
        return Weapon.objects.filter(user=current_user)
    
    # handles POST requests
    def perform_create(self, serializer):
        if serializer.is_valid():
            serializer.save(user=self.request.user)
        else:
            print(serializer.errors)

class WeaponUpdate(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = WeaponSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        current_user = self.request.user
        return Weapon.objects.filter(user=current_user)

    def perform_update(self, serializer):
        if serializer.is_valid():
            serializer.save()
        else:
            print(serializer.errors)


# handles DELETE requests
class WeaponDelete(generics.DestroyAPIView):
    serializer_class = WeaponSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        current_user = self.request.user
        return Weapon.objects.filter(user=current_user)


class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]