package ngo.dsms.dsms.controller;

import ngo.dsms.dsms.model.*;
import ngo.dsms.dsms.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class MainController {

    //Applications
    @Autowired
    ApplicationRepo applicationRepo;
    @PostMapping(path = "/apply")
    public Application sendApplication(@RequestBody Application application){
        return applicationRepo.save(application);
    }

    @GetMapping(path = "/applications")
    public List<Application> getApplications(){
        return applicationRepo.findAll();
    }

    //Dogs
    @Autowired
    DogRepo dogRepo;
    @GetMapping(path = "/dogs")
    public List<Dog> getDogs(){
        return dogRepo.findAll();
    }

    @PostMapping(path = "/dog")
    public Dog sendDog(@RequestBody Dog dog){
        return dogRepo.save(dog);
    }

    //Feedbacks
    @Autowired
    FeedbackRepo feedbackRepo;
    @GetMapping(path = "/feedbacks")
    public List<Feedback> getFeedbacks(){
        return feedbackRepo.findAllByRatingGreaterThan(3);
    }

    @PostMapping(path = "/feedback")
    public Feedback sendfeedback(@RequestBody Feedback feedback){
        return feedbackRepo.save(feedback);
    }

    //Maintenance Requests
    @Autowired
    MaintenanceRepo maintenanceRepo;
    @GetMapping(path = "/maintenanceRequests")
    public List<Maintenance> getMaintenanceRequests(){
        return maintenanceRepo.findAll();
    }

    @PostMapping(path = "/request")
    public Maintenance sendMaintenanceRequest(@RequestBody Maintenance maintenance){
        return maintenanceRepo.save(maintenance);
    }

    //Shelters
    @Autowired
    ShelterRepo shelterRepo;
    @GetMapping(path = "/shelters")
    public List<Shelter> getShelters(){
        return shelterRepo.findAll();
    }
    @PostMapping(path = "/shelter")
    public Shelter sendShelter(@RequestBody Shelter shelter){
        return shelterRepo.save(shelter);
    }


    //Adopters
    @Autowired
    AdopterRepo adopterRepo;
    @GetMapping(path = "/adopters")
    public List<Adopter> getAdopters(){
        return adopterRepo.findAll();
    }
    @PostMapping(path = "/adopter")
    public Adopter sendAdopter(@RequestBody Adopter adopter){
        return adopterRepo.save(adopter);
    }

    //Events
    @Autowired
    EventRepo eventRepo;
    @GetMapping(path = "/events")
    public List<Event> getEvents(){
        return eventRepo.findAll();
    }

    @PostMapping(path = "/event")
    public Event sendEvent(@RequestBody Event event){
        return eventRepo.save(event);
    }

    //Health Records
    @Autowired
    Health_recordRepo health_recordRepo;
    @GetMapping(path = "/healthRecords")
    public List<Health_record> getHealthRecords(){
        return health_recordRepo.findAll();
    }

    @PostMapping(path = "/healthRecord")
    public Health_record sendHealthRecord(@RequestBody Health_record healthRecord){
        return health_recordRepo.save(healthRecord);
    }

    @Autowired
    TrainerRepo trainerRepo;
    @PostMapping(path = "/trainer")
    public Trainer sendTrainer(@RequestBody Trainer trainer){
        return trainerRepo.save(trainer);
    }

    @GetMapping(path = "/trainers")
    public List<Trainer> getTrainers(){
        return trainerRepo.findAll();
    }

    @Autowired
    Training_sessionRepo training_sessionRepo;
    @PostMapping(path = "/trainingSession")
    public Training_session sendTrainingSession(@RequestBody Training_session trainingSession){
        return training_sessionRepo.save(trainingSession);
    }

    @GetMapping(path = "/trainingSessions")
    public List<Training_session> getTrainingSessions(){
        return training_sessionRepo.findAll();
    }

    @Autowired
    VolunteerRepo volunteerRepo;
    @PostMapping(path = "/volunteer")
    public Volunteer sendVolunteer(@RequestBody Volunteer volunteer){
        return volunteerRepo.save(volunteer);
    }

    @GetMapping(path = "/volunteers")
    public List<Volunteer> getVolunteers(){
        return volunteerRepo.findAll();
    }

}
