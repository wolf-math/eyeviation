from django.urls import path
from . import views

urlpatterns = [
    path("customize/", views.WeaponListCreate.as_view(), name="custom-weapons-list"),
    path("customize/delete/<int:pk>/", views.WeaponDelete.as_view(), name="delete-weapon")
]
