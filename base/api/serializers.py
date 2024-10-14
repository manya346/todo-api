from rest_framework import serializers, validators
from base.models import Task
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'

class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required = True,
        validators = [validators.UniqueValidator(queryset=User.objects.all())]
    )

    password1 = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('username', 'password1', 'password2', 'email')

    def validate(self, attrs):
        if attrs['password1']!= attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match"})
        return attrs
    
    def create(self, validate_data):
        user = User.objects.create(
            username = validate_data['username'],
            email = validate_data['email'],
        )
    
        user.set_password(validate_data['password1'])
        user.save()
        
        return user