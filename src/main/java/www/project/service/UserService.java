package www.project.service;

import org.springframework.web.multipart.MultipartFile;
import www.project.domain.UserVO;

import java.io.IOException;

public interface UserService {
    void joinUser(UserVO uvo);

    int duplicationNick(String nickName);

    UserVO findEmail(String nick);

    int duplicationEmail(String email);

    int findUserPw(String nick, String email);

    UserVO getInfo(String currentId);

    void updateProfile(UserVO userVO);

    int getFollower(String currentId);

    int getFollowing(String currentId);

    boolean isNicknameDuplicate(String nickname);
}
