package com.example.mybookstore_backend.Service;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

@Service
@Scope(value = "session")
public class TimerServiceImpl implements TimerService{
    long startTime;
    TimerServiceImpl(){
        startTime = 0;
    }
    @Override
    public void startTimer() {
        startTime = System.currentTimeMillis();
        System.out.println("Timer started");
    }

    @Override
    public long getCurrentTime() {
        return System.currentTimeMillis() - startTime;
    }

    @Override
    public long stopTimer() {
        long endTime = System.currentTimeMillis();
        System.out.println("Timer stopped");
        return endTime - startTime;
    }

    @Override
    public boolean isTimerRunning() {
        return startTime != 0;
    }
}
