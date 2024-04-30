package ngo.dsms.dsms.repo;

import ngo.dsms.dsms.model.Event;
import ngo.dsms.dsms.model.Volunteer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EventRepo extends JpaRepository<Event, Integer> {

}
