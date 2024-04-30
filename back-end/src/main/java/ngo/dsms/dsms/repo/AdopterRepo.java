package ngo.dsms.dsms.repo;

import ngo.dsms.dsms.model.Adopter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdopterRepo extends JpaRepository<Adopter, Integer> {
}
