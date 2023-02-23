from rest_framework import serializers
from .models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'task_id', 'title', 'eta', 'status')


# class AuditTrialSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = AuditTrial
#         fields = ('__all__')

