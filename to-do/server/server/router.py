from rest_framework import routers

from tasks.viewsets import TaskViewSet

router = routers.DefaultRouter()
router.register('tasks', TaskViewSet)