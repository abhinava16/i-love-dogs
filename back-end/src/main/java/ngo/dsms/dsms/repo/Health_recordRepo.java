package ngo.dsms.dsms.repo;

import ngo.dsms.dsms.model.Health_record;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Health_recordRepo extends JpaRepository<Health_record, Integer> {
}
