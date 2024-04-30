package ngo.dsms.dsms.repo;

import ngo.dsms.dsms.model.Training_session;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Training_sessionRepo extends JpaRepository<Training_session, Integer> {
}
