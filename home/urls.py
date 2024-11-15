from django.urls import path
from .views import index

urlpatterns = [
    path('', index, name='studio'),  # 空のパスでindexを指定
]
