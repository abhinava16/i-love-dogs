package ngo.dsms.dsms.repo;

import ngo.dsms.dsms.model.Application;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApplicationRepo extends JpaRepository<Application, Integer> {
}
