from django.urls import path
from . import views
 
urlpatterns = [
    path("customize/", views.WeaponView.as_view(), name="custom-weapons-list"),
    path("customize/<int:pk>/", views.WeaponView.as_view(), name="update-weapon"),
]
