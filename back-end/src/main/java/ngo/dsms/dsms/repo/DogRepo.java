package ngo.dsms.dsms.repo;

import ngo.dsms.dsms.model.Dog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DogRepo extends JpaRepository<Dog, Integer> {
}
