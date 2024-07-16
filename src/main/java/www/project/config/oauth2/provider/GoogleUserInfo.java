package www.project.config.oauth2.provider;

import lombok.AllArgsConstructor;

import java.util.Map;

@AllArgsConstructor
public class GoogleUserInfo implements OAuth2UserInfo{

    private Map<String,Object> attributes;

    @Override
    public Map<String, Object> getAttributes() {return attributes;}

    @Override
    public String getProvider() {return "google";}

    @Override
    public String getPfoviderId() {return (String)attributes.get("sub");}

    @Override
    public String getEmail() {return (String)attributes.get("email");}

    @Override
    public String getName() {return (String)attributes.get("name");}
}
