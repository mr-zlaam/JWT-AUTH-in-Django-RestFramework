from django.urls import path
from .views import MyTokenObtainPairView, getRoutes
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path("", getRoutes),
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", MyTokenObtainPairView.as_view(), name="token_refresh"),
]
