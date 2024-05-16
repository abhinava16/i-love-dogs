# ILoveDogs

ILoveDogs is a full-stack application (60-40) designed to provide information about various dog breeds. Users can explore details, view images, and learn about different breeds. The project aims to create an engaging platform for dog enthusiasts.

## Technologies Used
- **Java**: Backend development using Spring Boot.
- **Spring Data Rest**: For creating RESTful APIs.
- **Spring Data JPA**: For database interaction.
- **SQL and MySQL**: Storing and managing data.
- **HTML and Tailwind CSS**: Frontend design and layout.
- **JavaScript**: Enhancing user interactions.
- **React** - Hooks like useState and useEffect are used for reactive approach.
- **React Router**: Building routes for components.
- **Lombok**: Simplifying Java code.
- **DBeaver**: Database management tool.
- **Apache Tomcat**: Web server for deployment.

## Features
- **Browse Dog Breeds**: Users can explore a list of dog breeds and file an application to contact us.
- **View Feedback Details**: All the positive feedbacks of the users are displayed before the user tries to give a feedback and these feedbacks are selected based on the rating.
- **Component-Based Approach**: The components like Shelters, Dogs, 
Feedbacks, Events and Trainers can be reused anytime and anywhere in the application.
## Challenges Faced
During the development of ILoveDogs, I encountered several challenges, including:
- **Data Modeling**: Designing an efficient database schema for storing breed information.
- **Cross-Origin Resource**: The frontend (built with React, deployed on port 5173) and backend (developed using Spring Boot, deployed on port 8080) separately. Cross-origin resource sharing (CORS) is configured to allow communication between the two components. This separation ensures modularity and scalability.


## Future Enhancements
In the future, I plan to:
- **Add User Authentication**: Allow users to create accounts and save their favorite breeds.
- **Implement User Reviews**: Enable users to leave reviews and ratings for each breed.
- **Enhance UI/UX**: Improve the overall user experience with better styling, animations and RWD.


## Entities and Relationships

### Entities
1. **Dog**
2. **Shelter**
3. **Employee**
4. **Manager**
5. **Volunteer**
6. **Health_Record**
7. **Adopter**
8. **Adoptee**
9. **Application**
10. **Event**
11. **Feedback**
12. **Trainer**
13. **Training_Session**
14. **Maintenance**

### Relationships
- **Volunteering**: One volunteer can serve multiple shelters, and one shelter can have multiple volunteers.
- **Participates_In**: Volunteers participate in events, and each event can have multiple volunteers.
- **Organizes**: Shelters organize events.
- **Manages**: Managers oversee shelters.
- **Works_For**: Employees work for shelters.
- **Managed_By**: Managers manage employees.
- **Dogs_In_Shelter**: Shelters accommodate dogs.
- **Dog_Health**: Each dog has a health record.
- **Adoption_Process**: Applications are submitted by adopters to adopt dogs.
- **Adopted_Dogs**: Adoptees (adopters) adopt dogs.
- **Gives_Feedback**: Adopters provide feedback.
- **Trained_By**: Dogs are trained by trainers in training sessions.
- **Raise_Request**: Shelters raise maintenance requests.
