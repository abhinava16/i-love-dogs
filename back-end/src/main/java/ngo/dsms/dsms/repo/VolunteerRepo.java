package ngo.dsms.dsms.repo;

import ngo.dsms.dsms.model.Volunteer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VolunteerRepo extends JpaRepository<Volunteer, Integer> {
}
