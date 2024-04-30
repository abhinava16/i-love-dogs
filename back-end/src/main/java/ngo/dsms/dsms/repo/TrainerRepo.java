package ngo.dsms.dsms.repo;

import ngo.dsms.dsms.model.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainerRepo extends JpaRepository<Trainer, Integer> {
}
