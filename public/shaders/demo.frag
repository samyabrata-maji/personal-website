precision mediump float;
        
uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float iTime;

// Generates colors that changes with t
// https://iquilezles.org/articles/palettes/
vec3 palatte(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
    return a + b*cos(6.28318*(c*t+d));
}

vec3 rainbow(float t) {
    
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 1.0);
    vec3 d = vec3(0.00, 0.33, 0.67);
    
    return palatte(t, a, b, c, d);
}

vec3 neon(float t) {
    
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(2.0, 1.0, 0.0);
    vec3 d = vec3(0.50, 0.20, 0.25);
    
    return palatte(t, a, b, c, d);
}

vec3 yb(float t) {
    
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.5, 0.5, 0.5);
    vec3 c = vec3(1.0, 1.0, 0.5);
    vec3 d = vec3(0.80, 0.90, 0.30);
    
    return palatte(t, a, b, c, d);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{

    float SCALE = 1.5;
    float SHARPNESS = 5.0; // between 1 - 10
    float AMPL = 4.0;
    float FREQUENCY = 2.0;
    
    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;
    vec2 uv0 = uv;
    vec3 fcolor = vec3(0.0);
    
    for (int i=0; i<3; i++) {
        uv = fract(uv * SCALE) - 0.5;
        
        float d = length(uv) + exp(-length(uv0));
        
        vec3 color = rainbow(length(uv0)*0.5 + iTime);
    
        d = sin(d * AMPL + iTime * FREQUENCY)/ AMPL;
    
        d = abs(d);
    
        d = pow(SHARPNESS/d*0.01, 2.0); 
    
        fcolor = d*color;
    }

    fragColor = vec4(fcolor, 1.0);
}

void main() 
{
    mainImage( gl_FragColor, gl_FragCoord.xy );
}