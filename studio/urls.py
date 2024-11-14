from django.urls import path
from .views import StudioView

urlpatterns = [
    path('', StudioView.as_view(), name='studio'),  # 空のパスでstudio_viewを指定
]