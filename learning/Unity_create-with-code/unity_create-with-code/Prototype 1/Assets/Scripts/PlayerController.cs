using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
    private float speed = 20.0f;
    //public float turnSpeed;
    private float turnSpeed = 45.0f;
    private float horizontalInput;
    private float forwardInput;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        //Use the values from Edit/Project Settings/Input 
        horizontalInput = Input.GetAxis("Horizontal");
        forwardInput = Input.GetAxis("Vertical");

        // Move the vehicle forward
        // Instead of framerate, deltaTime uses the Time class and deltaTime to see how much time between frames.
        // One meter per second.  *20 = 20 meters per second.
        transform.Translate(Vector3.forward * Time.deltaTime * speed * forwardInput);
        //TUTORIAL ERROR: Without a value for turnSpeed it is 0! // 0 * whatever = 0
        //transform.Translate(Vector3.right * Time.deltaTime * turnSpeed * horizontalInput);
        transform.Rotate(Vector3.up, Time.deltaTime * turnSpeed * horizontalInput);

    }
}
