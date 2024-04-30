package ngo.dsms.dsms.repo;

import ngo.dsms.dsms.model.Maintenance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MaintenanceRepo extends JpaRepository<Maintenance, Integer> {
}
