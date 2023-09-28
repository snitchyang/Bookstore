package com.example.mybookstore_backend.Controllers;

import com.example.mybookstore_backend.Dao.UserRepository;
import com.example.mybookstore_backend.Service.LoginService;
import com.example.mybookstore_backend.Service.LoginServiceImpl;
import com.example.mybookstore_backend.Service.TimerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.WebApplicationContext;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("/login")
public class loginController {
    @Autowired
    private LoginService loginService;
    @Autowired
    WebApplicationContext applicationContext;
    @GetMapping("")
    int login(String username, String password, HttpServletRequest request){
        int result = loginService.login(username, password);
        TimerService timerService = applicationContext.getBean(TimerService.class);
        HttpSession session = request.getSession();
        System.out.println(session.getId());
        System.out.println(result);
        if(result != -1){
            System.out.println("Logged in!");
            session.setAttribute("userName", username);
            timerService.startTimer();
        }
        return result;
    }
    @GetMapping("/logout")
    long logout(HttpServletRequest request){
        HttpSession session = request.getSession();
        System.out.println(session.getId());
        if(session.getAttribute("userName") == null){
            System.out.println("Not logged in!");
            return -1;
        }
        TimerService timerService = applicationContext.getBean(TimerService.class);
        long duration = timerService.stopTimer();
        session.invalidate();
        return duration;
    }
    @GetMapping("/timer")
    long getTimer(HttpServletRequest request){
        HttpSession session = request.getSession();
        System.out.println(session.getAttribute("userName"));
        if(session.getAttribute("userName") == null){
            return -1;
        }
        TimerService timerService = applicationContext.getBean(TimerService.class);
        return timerService.getCurrentTime();
    }
}
