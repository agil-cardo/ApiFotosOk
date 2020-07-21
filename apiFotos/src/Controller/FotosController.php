<?php

namespace App\Controller;

use App\Entity\Fotos;
use App\Repository\FotosRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;

class FotosController extends AbstractController
{
    /**
     * @Route("/fotos", name="fotos", methods={"GET"})
     */
    public function getFotos(FotosRepository $repo)
    {
        $fotos = $repo->findAll();

        return $this->json($fotos, 200, [], ['groups' => 'fotos:read']);
    }

    /**
     * @Route("/fotos/{id}", name="foto", methods={"GET"})
     */
    public function getFotoById(int $id, FotosRepository $repo)
    {
        $foto = $repo->findOneBy(['id' => $id]);

        return $this->json($foto, 200, [], ['groups' => 'fotos:read']);
    }

    /**
     * @Route("/fotos", name="foto_create", methods={"POST"})
     */
    public function createFoto(Request $request, SerializerInterface $serializer, EntityManagerInterface $em)
    {
        $jsonRecu = $request->getContent();

        // dd($jsonRecu);

        try 
        {
            $foto = $serializer->deserialize($jsonRecu, Fotos::class, "json");

            $em->persist($foto);
            $em->flush();

            return $this->json($foto, 201, [], ['groups' => 'fotos:read']);

            //pour recuperer nos articles au format Json todo lo que se quiere evaluar si falla
        } 
        catch (NotEncodableValueException $exception) 
        {
            return $this->json([
                'status' => 400,
                'message' => $exception->getMessage(),
                // controlador de errores y excepciones en general por culpa de la red 
                // y tambien fynally que siempre se ejecuta con el parametro exception
                // se captura el error en la app

            ], 400);
        }
    }
}
