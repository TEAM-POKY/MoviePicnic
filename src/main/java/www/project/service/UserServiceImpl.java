package www.project.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import www.project.domain.UserVO;
import www.project.repository.UserMapper;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserMapper usermapper;

    @Value("${file.upload-dir}")
    private String uploadDir;

    @Override
    public void joinUser(UserVO uvo) {
        int isOk = usermapper.joinUser(uvo);
        if(isOk == 1){
            usermapper.insertAuth(uvo.getEmail());
        }
    }

    @Override
    public int duplicationNick(String nickName) {
        return usermapper.duplicationNick(nickName);
    }

    @Override
    public int duplicationEmail(String email) { return usermapper.duplicationEmail(email); }

    @Override
    public int findUserPw(String nick, String email) {
        return usermapper.findUserPw(nick,email);
    }

    @Override
    public UserVO getInfo(String currentId) {
        return usermapper.getInfo(currentId);
    }

    @Override
    public UserVO findEmail(String nick) {
        return usermapper.findEmail(nick);
    }


    @Override
    public void updateProfile(UserVO uvo) {
        usermapper.updateProfile(uvo);
    }

    @Override
    public int getFollower(String currentId) {
        return usermapper.getFollower(currentId);
    }

    @Override
    public int getFollowing(String currentId) {
        return usermapper.getFollowing(currentId);
    }
}
