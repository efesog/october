using System.Collections;
using System.Collections.Generic;
using UnityEngine;
public class Move : MonoBehaviour
{
    public float hareketHizi = 5f;
    public float ziplamaGucu = 5f;
    private bool ziplamaYapabilir = true;

    void Update()
    {
        float yatayHareket = Input.GetAxis("Horizontal");
        Vector3 hareket = new Vector3(yatayHareket, 0f, 0f) * hareketHizi * Time.deltaTime;
        transform.Translate(hareket);

        if (Input.GetButtonDown("Jump") && ziplamaYapabilir)
        {
            GetComponent<Rigidbody2D>().AddForce(new Vector2(0f, ziplamaGucu), ForceMode2D.Impulse);
            ziplamaYapabilir = false;
        }
    }

    void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.CompareTag("Zemin"))
        {
            ziplamaYapabilir = true;
        }
    }
}
