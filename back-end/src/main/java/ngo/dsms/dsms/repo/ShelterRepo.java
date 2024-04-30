package ngo.dsms.dsms.repo;

import ngo.dsms.dsms.model.Shelter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShelterRepo extends JpaRepository<Shelter, Integer> {
}
