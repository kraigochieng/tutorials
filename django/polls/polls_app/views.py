from typing import Any
from django.utils import timezone
from django.shortcuts import render, get_object_or_404
from django.http import  HttpResponseRedirect
from django.urls import reverse
from .models import Question, Choice
from django.views import generic

# Create your views here.
class IndexView(generic.ListView):
    template_name = "polls_app/index.html"
    context_object_name = "questions"

    def get_queryset(self):
        return Question.objects.filter(pub_date__lte=timezone.now()).order_by('-pub_date')[:5]

class DetailView(generic.DetailView):
    model = Question
    template_name = "polls_app/detail.html"


class ResultsView(DetailView):
    model = Question
    template_name = "polls_app/results.html"


def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        choice = question.choice_set.get(pk=request.POST['choice'])
    except(KeyError, Choice.DoesNotExist):
        error_message = "You did not selecta choice"
        context = {
            'question': question,
            'error_message': error_message,
        }
        return render(request, "polls_app/detail.html", context)
    else:
        choice.votes += 1
        choice.save()
        return HttpResponseRedirect(reverse("polls_app:results", args=(question.id,)))
