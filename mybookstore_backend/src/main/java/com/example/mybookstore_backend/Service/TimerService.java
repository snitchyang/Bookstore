package com.example.mybookstore_backend.Service;

public interface TimerService {
    void startTimer();
    long getCurrentTime();
    long stopTimer();
    boolean isTimerRunning();
}
