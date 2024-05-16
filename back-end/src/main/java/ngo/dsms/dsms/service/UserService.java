package ngo.dsms.dsms.service;

import ngo.dsms.dsms.model.User;
import ngo.dsms.dsms.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;
    BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);
    public void saveUser(User user){
        user.setPassword(encoder.encode(user.getPassword()));
        System.out.println(user.getPassword());
        repo.save(user);
    }

}
