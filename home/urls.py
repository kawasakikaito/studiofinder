from django.urls import path
from .views import index

urlpatterns = [
    path('', index, name='home'),  # 空のパスでindexを指定
]
