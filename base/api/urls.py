from django.urls import path
from . import views

from rest_framework_simplejwt.views import(
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('task-list/', views.listTask, name="task-list"),
    path('task-create/', views.createTask, name="task-create"),
    path('task-update/<str:pk>/', views.updateTask, name="task-update"),
    path('task-delete/<str:pk>/', views.deleteTask, name="task-delete"),
    path('user/create/', views.createUser, name="user-create"),

]
